import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const WatchLists = () => {
     const [watchLists, setwatchLists] = useState([]);
        const {user} = useContext(AuthContext);
        const email = user?.email;
    
        useEffect(()=>{
           if(email){
            fetch(`https://game-scope-server.vercel.app/watch_lists?email=${email}`)
            .then(res => res.json())
            .then(data => {
                setwatchLists(data)
            })
           }
        },[email])
    return (
        <div>
            <div className="my-10">
                {
                    watchLists.map(watchList => <div key={watchList?._id} className="overflow-x-auto">
                        <table className="table">
                          {/* head */}
                          <thead>
                            <tr>
                              <th>Game</th>
                              <th>User</th>
                              <th>Email</th>
                              <th>Rating</th>
                              <th>Description</th>
                              <th>Published</th>
                            </tr>
                          </thead>
                          <tbody>
                            {/* row 1 */}
                            <tr>
                              <th> {watchList?.gameName} </th>
                              <td> {watchList?.name} </td>
                              <td> {watchList?.email} </td>
                              <td> {watchList?.genres} </td>
                              <td> {watchList?.description} </td>
                              <td> {watchList?.published} </td>
                            </tr>
                            {/* row 2 */}
                            {/* <tr className="hover">
                              <th></th>
                              <td>Hart Hagerty</td>
                              
                            </tr> */}
                            {/* row 3
                            <tr>
                              <th>sdf</th>
                              <td></td>
                            </tr> */}
                          </tbody>
                        </table>
                      </div>)
                }
            </div>
        </div>
    );
};

export default WatchLists;