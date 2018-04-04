const DoctorsAPI = {
  doctors: [
    {id:0, name: "Fabio"},
    {id:1, name: "Joao"},
    {id:10, name: "Alonso"},
    {id:11, name: "Sara"},
    {id:100, name: "Vinicius"},
  ],
  all: function() {return this.doctors},
  get: function(id){
    const isDoctor = p => p.number === id
    return this.doctors.find(isDoctor)
  }
}

export default DoctorsAPI
