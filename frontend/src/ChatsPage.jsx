// import {MultiChatWindow, MultiChatSocket, useMultiChatLogic} from 'react-chat-engine-advanced';
import { PrettyChatWindow } from 'react-chat-engine-pretty';


  const ChatsPage = (props) => {
    
    return (
      <div style={{height: '100vh'}}>
        <PrettyChatWindow 
            projectId='e6fa5426-ba06-4634-9f3d-bbc28ba9cdc7'
            username={props.user.username}
            secret={props.user.secret}
            style={{height: '100%'}}
        />
      </div>
    );

  }

  export default ChatsPage;