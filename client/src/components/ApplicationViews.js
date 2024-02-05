import { Routes, Route, Navigate} from "react-router-dom";
import PostList from "./PostList";
import PostForm from "./PostForm";
import PostDetails from "./PostDetails";
import UserProfileList from "./UserProfileList";
import UserProfileForm from "./UserProfileForm";
import UserProfileDetails from "./UserProfileDetails";

const ApplicationViews = () => {

return (
     <Routes>
     
        <Route path="/" element= {<PostList />} />
        
        <Route path="/posts/add" element={<PostForm />} />
        
        <Route path="/posts/:id" element={<PostDetails/>} />

        <Route path="/userprofiles" element= {<UserProfileList/>} />
        
        <Route path="/userprofiles/add" element={<UserProfileForm/>} />
        
        <Route path="/userprofiles/:id" element={<UserProfileDetails/>} />
                
        <Route path="*" element={<p>Whoops, nothing here...</p>} />
     
     </Routes>
    
    )
  

};

export default ApplicationViews;
