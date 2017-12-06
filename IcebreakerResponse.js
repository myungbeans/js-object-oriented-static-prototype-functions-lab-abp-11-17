function IcebreakerResponse(email){
  this.email = email
}

IcebreakerResponse.BatchCreate = function(emails){
  return emails.map(function(response){
    return new IcebreakerResponse(response)
    }
  )
}
<<<<<<< HEAD
=======

>>>>>>> c4a90391a1a0760be7eafc790ab01ba305c230e0
