import { Component, OnInit } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from '../../../node_modules/angularfire2/auth';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: Observable<firebase.User>;
  email: string;
  senha: string;
  fotoURL: string;
  nome: string;
  constructor(public auth: AngularFireAuth) {

  }

  ngOnInit() {
    this.user = this.auth.authState;
  }

  loginFacebook() {
    this.auth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

  vinculaFacebook() {
    this.auth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then((response: any) => {
      firebase.auth().currentUser.linkAndRetrieveDataWithCredential(response.credential).then((user) => {
        console.log('OK');
      }, (erro) => {
        console.log('ERRO', erro);
      });
    }).catch((erro) => {
      firebase.auth().currentUser.linkAndRetrieveDataWithCredential(erro.credential).then((user) => {
        console.log('OK');
      }, (erro) => {
        console.log('ERRO', erro);
      })
    });
  }

  vinculaGithub() {
    this.auth.auth.signInWithPopup(new firebase.auth.GithubAuthProvider()).then((response: any) => {
      firebase.auth().currentUser.linkAndRetrieveDataWithCredential(response.credential).then((user) => {
        console.log('OK');
      }, (erro) => {
        console.log('ERRO', erro);
      });
    }).catch((erro) => {
      firebase.auth().currentUser.linkAndRetrieveDataWithCredential(erro.credential).then((user) => {
        console.log('OK');
      }, (erro) => {
        console.log('ERRO', erro);
      })
    });
  }

  loginGithub() {
    this.auth.auth.signInWithPopup(new firebase.auth.GithubAuthProvider());
  }

  loginEmail() {
    firebase.auth().signInWithEmailAndPassword(this.email, this.senha).catch((erro) => {
      console.log(erro);
    });
  }

  vinculaEmail() {
    let credential = firebase.auth.EmailAuthProvider.credential(this.email, this.senha);
    firebase.auth().currentUser.linkAndRetrieveDataWithCredential(credential).then((user) => {
      console.log('OK');
    }, (erro) => {
      console.log('ERRO', erro);
    });
  }

  cadastroEmail() {
    firebase.auth().createUserWithEmailAndPassword(this.email, this.senha)
      .then((response: any) => {
        let usuarioCriado = firebase.auth().currentUser;
        usuarioCriado.updateProfile({
          displayName: this.nome,
          photoURL: this.fotoURL
        });
      }).catch((erro) => {
        console.log(erro);
      });
  }

  

  sair() {
    this.auth.auth.signOut();
  }
}
