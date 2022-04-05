using AutoMapper;
using OnClass.Domain.Models;
using OnClass.DTO;
using OnClass.Infra.UnitOfWork;
using OnClass.Service.Data.Interfaces;

namespace OnClass.Service.Data
{
    public class DisciplinaService : IDisciplinaService
    {
        private readonly IUnitOfWork _uow;
        private readonly IMapper _mapper;

        public DisciplinaService(IUnitOfWork uow, IMapper mapper)
        {
            _uow = uow;
            _mapper = mapper;
        }

        public async Task<DisciplinasParaLecionarDTO> CriarDisciplinasInstrutor(DisciplinasParaLecionarDTO disciplinasParaLecionarDTO)
        {
            var instrutorDisciplinasList = new List<InstrutorDisciplina>();

             var disciplinasParaDeletar = (await _uow.InstrutorDisciplinaRepository.Get())
                .Where(e => e.InstrutorId == disciplinasParaLecionarDTO.InstrutorDTO.Id).ToList();

            foreach (var disciplina in disciplinasParaDeletar)
            {
                await _uow.InstrutorDisciplinaRepository.Delete(disciplina.Id);
            }

            foreach (var disciplina in disciplinasParaLecionarDTO.DisciplinasDTO.DistinctBy(e => e.Id))
            {
                instrutorDisciplinasList.Add(new InstrutorDisciplina
                {
                    InstrutorId = disciplinasParaLecionarDTO.InstrutorDTO.Id,
                    DisciplinaId = disciplina.Id,
                });
            }

            
            var result = await _uow.InstrutorDisciplinaRepository.InserirDisplicinasDoInstrutor(instrutorDisciplinasList);
            if (result)
            {
                return disciplinasParaLecionarDTO;
            }
            return null;
        }

        public async Task<List<DisciplinaDTO>> GetDisciplinaDTOs()
        {
            var disciplinasDB = await _uow.DisciplinaRepository.Get();
            return _mapper.Map<List<DisciplinaDTO>>(disciplinasDB);
        }

        public List<DisciplinaDTO> GetDisciplinasPorInstrutor(long instrutorId)
        {
            var disciplinasDB = _uow.DisciplinaRepository.GetDisciplinasPorInstrutor(instrutorId);
            return _mapper.Map<List<DisciplinaDTO>>(disciplinasDB);
        }
    }
}
