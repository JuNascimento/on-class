using Microsoft.AspNetCore.Http;
using OnClass.Domain.Models;
using OnClass.DTO;

namespace OnClass.Service.FileHelper.Interfaces
{
    public interface IFileHelperService
    {
        public Task DeleteFile(long documentoId);
        public Task<(string, byte[])> GetSingleFileAsync(long documentoId);
        public Task<string> SaveFileAsync(FileDTO fileDTO);
        public Task<DocumentoAulaDTO> GetDocumentoAula(long aulaId);
    }
}