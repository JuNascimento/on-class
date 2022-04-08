using Microsoft.AspNetCore.Http;
using OnClass.Domain.Models;
using OnClass.DTO;

namespace OnClass.Service.FileHelper.Interfaces
{
    public interface IFileHelperService
    {
        public void DeleteFile(DocumentoAula arquivo);
        public Task<(string, byte[])> GetSingleFileAsync(long documentoId);
        public Task<string> SaveFileAsync(FileDTO fileDTO);
        public Task<DocumentoAulaDTO> GetDocumentoAula(long aulaId);
    }
}