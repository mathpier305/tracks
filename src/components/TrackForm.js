import React, {useContext} from 'react';
import {Input, Button} from 'react-native-elements';
import Spacer from '../components/Spacer';
import {Context as LocationContext} from '../Context/LocationContext';

const TrackForm = () => {
    const {state: {name, recording, locations}, 
        startRecording, 
        stopRecording, 
        changeName } = useContext(LocationContext);

        //console.log(locations.length)
    return <>
    <Spacer>
     <Input 
     placeholder="Enter name"
     onChangeText={changeName}
     value={name}
     />
    </Spacer>
    {recording 
    ? <Button title="stop" onPress={stopRecording} /> 
    : <Button title="Start Recording" onPress={startRecording} />
}
    </>
}

export default TrackForm;