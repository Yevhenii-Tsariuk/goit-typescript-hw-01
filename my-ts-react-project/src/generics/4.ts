type UserProfile = {
     name: string;
     surname: string;
     email: string;
     password: string;
   }
   
   function createOrUpdateUser(initialValues: Partial<UserProfile>) {
     const defaultUser: UserProfile = {
          name: '',
          surname: '',
          email: '',
          password: ''
        };
      
     
        return { ...defaultUser, ...initialValues };
   }
   
   const newUser = createOrUpdateUser({ 
     email: 'user@mail.com', 
     password: 'password123' 
   });

   console.log(newUser)