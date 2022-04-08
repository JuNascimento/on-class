using OnClass.Service.FileHelper.Interfaces;
using System.IO.Compression;
using OnClass.Domain.Models;
using OnClass.Infra.UnitOfWork;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Hosting;
using OnClass.DTO;

namespace OnClass.Service.FileHelper
{
    public class FileHelperService : IFileHelperService
    {
        private readonly IHostEnvironment _environment;
        private readonly IUnitOfWork _uow;
        private readonly string dirPath = @$"{Environment.GetEnvironmentVariable("VOLUME_PATH")}";

        public FileHelperService(IHostEnvironment environment, IUnitOfWork uow)
        {
            _environment = environment;
            _uow = uow;
        }

        public async Task<(string, byte[])> GetSingleFileAsync(long documentoId)
        {
            Console.WriteLine(GetFullPath());
            var documento = await _uow.DocumentoAulaRepository.Get(documentoId);
            if(documento is null)
            {
                throw new FileNotFoundException();
            }
            return (documento.NomeOriginal, await GetSingleFileAsync(documento));
        }

        private static async Task<byte[]> GetSingleFileAsync(DocumentoAula arquivo)
        {
            try
            {
                var bytes = await File.ReadAllBytesAsync(arquivo.CaminhoDocumento);
                return bytes;
            }
            catch (Exception)
            {
                throw new FileNotFoundException();
            }

        }

        public async Task<string> SaveFileAsync(FileDTO fileDTO)
        {
            try
            {
                Console.WriteLine(GetFullPath());
                var fullPath = Path.Combine(GetFullPath(), "pdfs");

                if (!Directory.Exists(fullPath))
                {
                    Directory.CreateDirectory(fullPath);
                }
                var fileName = Path.GetRandomFileName();
                var ext = Path.GetExtension(fileDTO.FormFile.FileName).ToLowerInvariant();
                var filePath = Path.Combine(fullPath, fileName);

                using (FileStream fileStream = File.Create(filePath))
                {
                    await fileDTO.FormFile.CopyToAsync(fileStream);
                    fileStream.Flush();
                }
                var nomeOriginal = Path.GetFileNameWithoutExtension(fileDTO.FormFile.FileName);
                await _uow.DocumentoAulaRepository.Create(new DocumentoAula
                {
                    DataCriacao = DateTime.Now,
                    CaminhoDocumento = filePath,
                    ExtensaoOriginal = ext,
                    NomeOriginal = nomeOriginal,
                    NomeHash = fileName,
                    AulaId = fileDTO.AulaId
                });
                return nomeOriginal;
            }
            catch (Exception)
            {
                throw;
            }
            
        }

        private string GetFullPath()
        {
            var parentDiretory = Directory.GetParent(_environment.ContentRootPath);
            var fullPath = Path.Combine(parentDiretory.FullName, dirPath);
            return fullPath;
        }

        public async Task DeleteFile(long documentoId)
        {
            var arquivo = await _uow.DocumentoAulaRepository.Get(documentoId);
            if(arquivo is null)
            {
                throw new FileNotFoundException("Arquivo não encontrado");
            }
            DeleteFile(arquivo.CaminhoDocumento);
            await _uow.DocumentoAulaRepository.Delete(arquivo.Id);
        }

        private static void DeleteFile(string caminhoArquivo)
        {
            File.Delete(caminhoArquivo);
        }

        public async Task<DocumentoAulaDTO> GetDocumentoAula(long aulaId)
        {
            var documento = (await _uow.DocumentoAulaRepository.Get()).FirstOrDefault(e => e.AulaId == aulaId);
            var documentoAula = new DocumentoAulaDTO
            {
                IdArquivo = documento.Id,
                NomeArquivo = documento.NomeOriginal
            };
            return documentoAula;
        }
    }
}
