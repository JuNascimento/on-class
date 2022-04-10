import React, { useState } from 'react'
import { LoginButton } from '../homePage/index.style'
import { ModalContainer } from '../modal'
import NewClassContainer from '../newClass'
import {
  Class,
  Classes,
  ClassInfo,
  Lado,
  Lados,
  StickyButton,
  StudentName,
  Subtitle,
  SubtitleLabel,
} from './index.style'

const ControlPanelContainer: React.FC = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <Lados>
        <Lado>
          <Subtitle>
            <SubtitleLabel>Próximas aulas</SubtitleLabel>
          </Subtitle>
          <Classes>
            <Class shouldFocous={true} nextClasses={true}>
              <ClassInfo>10/04/2022, 16:30 - 17:30</ClassInfo>
              <ClassInfo>Material de apoio: nenhum</ClassInfo>
              <LoginButton isDisabled={false} onClick={() => {}}>
                Entrar para a aula
              </LoginButton>
            </Class>
            <Class shouldFocous={false} nextClasses={true}>
              <ClassInfo>10/04/2022, 16:30 - 17:30</ClassInfo>
              <ClassInfo>Material de apoio: nenhum</ClassInfo>
              <LoginButton isDisabled={false}>Editar aula</LoginButton>
            </Class>
            <Class shouldFocous={false} nextClasses={true}>
              <ClassInfo>10/04/2022, 16:30 - 17:30</ClassInfo>
              <ClassInfo>Material de apoio: nenhum</ClassInfo>
              <LoginButton isDisabled={false}>Editar aula</LoginButton>
            </Class>
            <Class shouldFocous={false} nextClasses={true}>
              <ClassInfo>10/04/2022, 16:30 - 17:30</ClassInfo>
              <ClassInfo>Material de apoio: nenhum</ClassInfo>
              <LoginButton isDisabled={false}>Editar aula</LoginButton>
            </Class>
            <Class shouldFocous={false} nextClasses={true}>
              <ClassInfo>10/04/2022, 16:30 - 17:30</ClassInfo>
              <ClassInfo>Material de apoio: nenhum</ClassInfo>
              <LoginButton isDisabled={false}>Editar aula</LoginButton>
            </Class>
            <Class shouldFocous={false} nextClasses={true}>
              <ClassInfo>10/04/2022, 16:30 - 17:30</ClassInfo>
              <ClassInfo>Material de apoio: nenhum</ClassInfo>
              <LoginButton isDisabled={false}>Editar aula</LoginButton>
            </Class>
            <Class shouldFocous={false} nextClasses={true}>
              <ClassInfo>10/04/2022, 16:30 - 17:30</ClassInfo>
              <ClassInfo>Material de apoio: nenhum</ClassInfo>
              <LoginButton isDisabled={false}>Editar aula</LoginButton>
            </Class>
          </Classes>
          <StickyButton onClick={() => setShowModal(true)}>
            Agendar nova aula
          </StickyButton>
        </Lado>
        <Lado>
          <Subtitle>
            <SubtitleLabel>Aulas concluídas</SubtitleLabel>
          </Subtitle>
          <Classes>
            <Class shouldFocous={false} nextClasses={false}>
              <StudentName>Pedro Furtado - Português</StudentName>
              <ClassInfo>10/04/2022, 16:30 - 17:30</ClassInfo>
              <ClassInfo>Material de apoio: nenhum</ClassInfo>
            </Class>
            <Class shouldFocous={false} nextClasses={false}>
              <StudentName>Pedro Furtado - Português</StudentName>
              <ClassInfo>10/04/2022, 16:30 - 17:30</ClassInfo>
              <ClassInfo>Material de apoio: nenhum</ClassInfo>
            </Class>
            <Class shouldFocous={false} nextClasses={false}>
              <StudentName>Pedro Furtado - Português</StudentName>
              <ClassInfo>10/04/2022, 16:30 - 17:30</ClassInfo>
              <ClassInfo>Material de apoio: nenhum</ClassInfo>
            </Class>
            <Class shouldFocous={false} nextClasses={false}>
              <StudentName>Pedro Furtado - Português</StudentName>
              <ClassInfo>10/04/2022, 16:30 - 17:30</ClassInfo>
              <ClassInfo>Material de apoio: nenhum</ClassInfo>
            </Class>
            <Class shouldFocous={false} nextClasses={false}>
              <StudentName>Pedro Furtado - Português</StudentName>
              <ClassInfo>10/04/2022, 16:30 - 17:30</ClassInfo>
              <ClassInfo>Material de apoio: nenhum</ClassInfo>
            </Class>
            <Class shouldFocous={false} nextClasses={false}>
              <StudentName>Pedro Furtado - Português</StudentName>
              <ClassInfo>10/04/2022, 16:30 - 17:30</ClassInfo>
              <ClassInfo>Material de apoio: nenhum</ClassInfo>
            </Class>
            <Class shouldFocous={false} nextClasses={false}>
              <StudentName>Pedro Furtado - Português</StudentName>
              <ClassInfo>10/04/2022, 16:30 - 17:30</ClassInfo>
              <ClassInfo>Material de apoio: nenhum</ClassInfo>
            </Class>
            <Class shouldFocous={false} nextClasses={false}>
              <StudentName>Pedro Furtado - Português</StudentName>
              <ClassInfo>10/04/2022, 16:30 - 17:30</ClassInfo>
              <ClassInfo>Material de apoio: nenhum</ClassInfo>
            </Class>
            <Class shouldFocous={false} nextClasses={false}>
              <StudentName>Pedro Furtado - Português</StudentName>
              <ClassInfo>10/04/2022, 16:30 - 17:30</ClassInfo>
              <ClassInfo>Material de apoio: nenhum</ClassInfo>
            </Class>
            <Class shouldFocous={false} nextClasses={false}>
              <StudentName>Pedro Furtado - Português</StudentName>
              <ClassInfo>10/04/2022, 16:30 - 17:30</ClassInfo>
              <ClassInfo>Material de apoio: nenhum</ClassInfo>
            </Class>
          </Classes>
        </Lado>
      </Lados>
      {showModal && (
        <ModalContainer>
          <NewClassContainer setShowModal={setShowModal} />
        </ModalContainer>
      )}
    </>
  )
}

export default ControlPanelContainer
