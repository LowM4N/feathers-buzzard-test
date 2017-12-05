import io from 'socket.io-client'
import feathers from '@feathersjs/feathers'
import socketio from '@feathersjs/socketio-client'
import auth from '@feathersjs/authentication-client'

const socket = io(process.env.backendUrl)
const Client = feathers()
  .configure(socketio(socket))
  .configure(auth({
    storage: window.localStorage,
    storageKey: 'feathers-jwt'
  }))

export {
  Client
}

export default async ctx => {
  const {
    env: { backendUrl }
  } = ctx
}