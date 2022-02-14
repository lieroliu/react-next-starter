import {useEffect, useState, useCallback} from 'react';
import Pusher from 'pusher-js';

export const usePusher = (channel) => {
    const [server, setServer] = useState();
    useEffect(() => {
        console.log('process.env.MESSANGING_SENDER_ID', process.env.MESSANGING_SENDER_ID)
        const pusher = new Pusher(process.env.MESSANGING_SENDER_ID, {cluster: 'ap3'});
        const channel = pusher.subscribe('my-channel');
        channel.bind('my-event', function (data) {
            console.log(data)
            return data
        });

        setServer(pusher)
        // const pusherClient = new Pusher({
        //     app_id = "1329132",
        //     key = "9e3f9e82dbf77fc77a96",
        //     secret = "da3f5a23e582ef3c94c2",
        //     cluster = "ap3"
        // });

        // setPusherClient(pusherClient);

        // setServer(pusherClient)

        return() => {
            pusher.unsubscribe()
        }
    }, [])

    const sendMessage = useCallback(() => {
        server
    }, [])

    return {server}
}
