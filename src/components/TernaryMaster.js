import React from 'react'

const People = {
    name: "john",
    email: "john22@gmail.com",
    phone: "505-620-4364",
    address: "123 Main St",
}

const People2 = {...People, name: "tom"}
console.log(People2)

const TernaryMaster = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState(null);
    const [randData, setRandData] = useState([])
  return (
    <div>TernaryMaster</div>
  )
}

export default TernaryMaster