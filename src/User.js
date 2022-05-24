import React from 'react'

function User({el}) {
  return (
    <div className='user'  >
     <h2> user id :{el.id} </h2>
     <h5> user name :{el.name} </h5>
     <h5> user email : {el.email} </h5>
     <h5> user adress :{el.address.street}_ {el.address.suite}_{el.address.city}_zipcode:{el.address.zipcode} </h5>
     <h5> user phone :{el.phone} </h5>
     <h5> website : {el.website} </h5>
     <h5> user company : {el.company.name}__ catcPhrase : {el.company.catchPhrase} </h5>
    



    </div>
  )
}

export default User