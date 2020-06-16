import React from 'react'

const NewUsers = () => {
  return (
    <React.Fragment>

<div class="row">
    <div class="col-md-4 mx-auto">
        <div class="card text-center">
            <div class="card-header">
              <h1>Create Account</h1>
            </div>
            <div class="card-body">
                <form action="/users/signup" method="POST">
                    <div class="form-group">
                        <input type="text" class="form-control" name="name" placeholder="Name" />
                    </div>
                    <div class="form-group">
                        <input type="email" class="form-control" name="email" placeholder="Email" />
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control" name="password" placeholder="Password" />
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control" name="confirm_password" placeholder="Confirm password" />
                    </div>
                    <div class="form-group">
                    <button type="submit" class="btn btn-primary btn-block" >
                        SignUp
                    </button>
                    </div>
                    
                </form>
            </div>
        </div>
    </div>
</div>
    </React.Fragment>
  )
}

export default NewUsers;
