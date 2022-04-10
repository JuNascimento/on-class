type ResonseJson = {
  username: string
  nome: string
  role: string
  token: string
  token_expiration_date: string
  primeiro_login: string
}

type StudentResponseJson = ResonseJson & { estudante_id: number }

type TeacherResponseJson = ResonseJson & { instrutor_id: number }

export const setSessionStorage = (
  userRole: string,
  responseJson: StudentResponseJson | TeacherResponseJson
) => {
  console.log('resposeJson type', Object.keys(responseJson))
  sessionStorage.setItem(`${userRole}Login`, JSON.stringify(responseJson))
}

export const getSessionStorage = (userRole: string) => {
  const sessionStorageItem = sessionStorage.getItem(`${userRole}Login`)
  if (sessionStorageItem) {
    return JSON.parse(sessionStorageItem)
  }
  return false
}

export const removeItemSessionStorage = () => {
  sessionStorage.removeItem('studentLogin')
  sessionStorage.removeItem('teacherLogin')
}
