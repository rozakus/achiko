const JWT = require('jsonwebtoken')
const JWT_SECRET = 'JWT'
const firebase = require('firebase')

class MainController {
  static async login(req, res) {
    try {
      const { email, password } = req.body

      if (email !== 'abdulrozak.mail@gmail.com' || !email || password !== 'test123' || !password) {
        return res.status(400).json({ message: 'email / password is invalid' })
      }

      const profile = {
        name: 'Abdul Rozak',
        email: 'abdulrozak.mail@gmail.com',
        github: 'https://github.com/rozakus'
      }

      let token = JWT.sign(profile, JWT_SECRET)

      // Your web app's Firebase configuration
      var firebaseConfig = {
        apiKey: "AIzaSyAI3HU7aBzmcdWjlA65CKtPrjrv5Nc5l4I",
        authDomain: "achiko-by-rozakus.firebaseapp.com",
        databaseURL: "https://achiko-by-rozakus-default-rtdb.firebaseio.com",
        projectId: "achiko-by-rozakus",
        storageBucket: "achiko-by-rozakus.appspot.com",
        messagingSenderId: "859846061851",
        appId: "1:859846061851:web:1a8d25c3a235dc692f6dbe"
      };

      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

      var db = firebase.database()
      var usersRef = db.ref('users/1')

      usersRef.once('value', showData, showError)

      function showData(datas) {
        console.log('>>> FIREBASE RUN')
        console.log(datas.val())
        return res.status(200).json(datas.val())
      }

      function showError(err) {
        console.log('>>> FIREBASE ERROR')
        console.log(err)
        return res.status(500).json({ err })
      }

      return res.status(200).json({ access_token: token })

    } catch (err) {
      return res.status(500).json(err)
    }
  }
}

module.exports = MainController