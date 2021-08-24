import React from 'react'
import  propTypes  from 'prop-types'

 const Profile =(props)=>{
     

            return (
                <div style={{   Color:'grey'}}>
             
                    <h3>FullName:   {props.fullName} </h3>
                    <h3>bio:   {props.bio}</h3>
                    <h3>profession:   {props.profession}</h3>
                    
                   
        
                </div>
            )
        
            }
            Profile.propTypes ={
                fullName: propTypes.string,
                bio: propTypes.string,
                profession: propTypes.string,
            }
        export default  Profile;
