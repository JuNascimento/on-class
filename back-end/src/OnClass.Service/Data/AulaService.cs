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
            return await BuildAulaDTO(aulaDB);
        }

        public async Task<AulaDTO> CriarAula(AulaDTO aulaDTO)
        {
            var aula = _mapper.Map<Aula>(aulaDTO);
            aula.DataFim = aula.DataInicio.AddHours(1);
            aula.Uuid = Guid.NewGuid().ToString();
            var aulaDB = await _uow.AulaRepository.Create(aula);
            
            return await BuildAulaDTO(aulaDB);
        }

        public async Task<AulaDTO> EditarAula(AulaDTO aulaDTO)
        {
            var aula = _mapper.Map<Aula>(aulaDTO);
            var aulaDB = await _uow.AulaRepository.Update(aula.Id, aula);
            return await BuildAulaDTO(aulaDB);
        }

        public async Task<List<AulaDTO>> GetAulas()
        {
            var aulasDTO = new List<AulaDTO>();
            var aulasDB = await _uow.AulaRepository.Get();
            foreach (var aula in aulasDB)
            {
                aulasDTO.Add(await BuildAulaDTO(aula));
            }
            return aulasDTO.OrderBy(e => e.DataInicio).ToList();
        }

        private async Task<AulaDTO> BuildAulaDTO(Aula aula)
        {
            var aulaDTO = _mapper.Map<AulaDTO>(aula);
            var instrutorDB = await _uow.InstrutorRepository.Get(aula.InstrutorId);
            var disciplinaDB = await _uow.DisciplinaRepository.Get(aula.DisciplinaId);
            aulaDTO.InstrutorDTO = _mapper.Map<InstrutorBasicDTO>(instrutorDB);
            aulaDTO.DisciplinaDTO = _mapper.Map<DisciplinaDTO>(disciplinaDB);
            return aulaDTO;
        }

        public async Task<List<AulaDTO>> PesquisarAula(BuscarAulaDTO buscarAulaDTO)
        {
            var aulasDTO = new List<AulaDTO>();
            var aulasDB = _uow.AulaRepository.BuscarAulas(buscarAulaDTO.IdInstrutores, buscarAulaDTO.IdDisciplinas,
                buscarAulaDTO.DataInicio, buscarAulaDTO.DataFim);
            foreach (var aula in aulasDB)
            {
                aulasDTO.Add(await BuildAulaDTO(aula));
            }
            return aulasDTO;
        }
    }
}
