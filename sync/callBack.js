class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(()=> {
        if (
          (id =='kim' && password == '1234') ||
          (id =='cho' && password == '2345')
        ) {
          resolve(id)
        } else {
          reject(new Error('not found'))
        }
      }, 2000)
    }) 
  }

  getRoles(user) { //성공하고 실패했을 때 경우에서 권한 찾기
    return new Promise((resolve, reject) => {
      setTimeout(()=> {
        if (user == 'cho') {
          resolve({name:'cho', role:'admin'})
        } else if(user == 'kim') {
          resolve({name:'kim', role:'normal'})
        } else {
          reject(new Error('no access'))
        }
      }, 1000)
    })
  }
}

const userStorage = new UserStorage()
const id = prompt('아이디 입력')
const password = prompt('비밀번호 입력')

// userStorage.loginUser(
//   id,
//   password,
//   (user) => {
//     userStorage.getRoles(user,
//       (userWithRoles) => {
//         alert(`${userWithRoles.name}의 role은 ${userWithRoles.role}입니다.`)
//       },
//       (error) => {
//         console.log(error)
//       }
//     )
//   },
//   (error) => {
//     console.log(error)
//   }
// )

userStorage.loginUser(
  id,
  password,
)
  userStorage.getRoles()
    .then((user) => alert(`${userWithRoles.name}의 role은 ${userWithRoles.role}입니다.`))
    .catch(error => console.log(error))
  .catch(error => console.log(error))



//promise, aysnc await