const { where } = require('sequelize')
const { Room } = require('../models')

class roomController {
  static async fetchAllRoom(req, res, next) {
    try {
      const fetchRooms = await Room.findAll()

      res.status(200).json({
        fetchRooms
      })
    } catch (error) {
      next(error)
    }
  }

  static async fetchRoomById(req, res, next) {
    try {
      const { id } = req.params

      const roomById = await Room.findOne({
        where: {
          id
        }
      })

      if (!roomById) throw {
        message: 'NotFound'
      }

      res.status(200).json({
        roomById
      })
    } catch (error) {
      next(error)
    }
  }
}

module.exports = roomController