using AutoMapper;
using OnClass.Domain.Models;
using OnClass.DTO;
using OnClass.Infra.UnitOfWork;
using OnClass.Service.Data.Interfaces;

namespace OnClass.Service.Data
{
    public class AulaService : IAulaService
    {
        private readonly IUnitOfWork _uow;
        private readonly IMapper _mapper;

        public AulaService(IUnitOfWork uow, IMapper mapper)
        {
            _uow = uow;
            _mapper = mapper;
        }

        public async Task<AulaDTO> InscricaoAula(AulaEstudanteDTO aulaEstudanteDTO)
        {
            var estudanteDB = await _uow.EstudanteRepository.GetEstudanteByUserId(aulaEstudanteDTO.EstudanteId);
            var frequenciaAula = new FrequenciaAula
            {
                AulaId = aulaEstudanteDTO.AulaId,
                EstudanteId = estudanteDB.Id
            };
            await _uow.FrequenciaAulaRepository.Create(frequenciaAula);
            var aulaDB = await _uow.AulaRepository.Get(aulaEstudanteDTO.AulaId.Value);
            return _mapper.Map<AulaDTO>(aulaDB);
        }

        public async Task<AulaDTO> CriarAula(AulaDTO aulaDTO)
        {
            var instrutorDB = await _uow.InstrutorRepository.GetInstrutorByUserId(aulaDTO.InstrutorDTO.Id.Value);
            var aula = _mapper.Map<Aula>(aulaDTO);
            aula.InstrutorId = instrutorDB.Id;
            aula.Uuid = Guid.NewGuid().ToString();
            var aulaDB = await _uow.AulaRepository.Create(aula);
            var aulaDTONovo = _mapper.Map<AulaDTO>(aulaDB);
            aulaDTONovo.InstrutorDTO = aulaDTO.InstrutorDTO;
            aulaDTONovo.DisciplinaDTO = aulaDTO.DisciplinaDTO;
            return aulaDTONovo;
        }

        public async Task<AulaDTO> EditarAula(AulaDTO aulaDTO)
        {
            var aula = _mapper.Map<Aula>(aulaDTO);
            var aulaDB = await _uow.AulaRepository.Update(aula.Id, aula);
            return _mapper.Map<AulaDTO>(aulaDB);
        }

        public async Task<List<AulaDTO>> GetAulas()
        {
            var aulasDB = await _uow.AulaRepository.Get();
            return _mapper.Map<List<AulaDTO>>(aulasDB);
        }

        public List<AulaDTO> PesquisarAula(BuscarAulaDTO buscarAulaDTO)
        {
            List<Aula> aulasDB = _uow.AulaRepository.BuscarAulas(buscarAulaDTO.IdInstrutores, buscarAulaDTO.IdDisciplinas,
                buscarAulaDTO.DataInicio, buscarAulaDTO.DataFim);
            return _mapper.Map<List<AulaDTO>>(aulasDB);
        }
    }
}
