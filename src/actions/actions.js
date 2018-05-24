

export const IS_LOGGED = 'IS_LOGGED'

export default function isLogged(status){
  return {type: IS_LOGGED, status}
}
