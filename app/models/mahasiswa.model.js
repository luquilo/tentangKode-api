const { default: mongoose, Schema } = require("mongoose")

module.exports = mongoose => {
    const schema = mongoose.Schema(
        {
            nama_lengkap: string,
            jenis_kelamin: string,
            tanggal_lahir: Date,
            tempat_lahir: string,
            alamat: ''
        }, 
        {
            timestamps: true
        }
    )

}

return mongoose.model('mahasiswa', schema)