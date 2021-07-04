const express = require('express');
const cors = require('cors');
const socket = require('socket.io');
const port = 3001;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'))

const server = app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});

const io = socket(server, {
    cors: {
        origin: '*',
    }
});

const contacts = [
    {
        name: 'echo bot',
        image: '',
    },
    {
        name: 'spam bot',
        image: '',
    }
];

io.on('connection', socket => {
    console.log(socket.id)
    socket.join('messenger');
    console.log(`user joined messenger`);

    io.to('messenger').emit('receive_list_of_contacts', contacts);

    socket.on('join_room', data => {
        socket.join(data);
        console.log(`User joined room: ${data}`);
    });

    socket.on('disconnect', reason => {
        console.log('User disconnected');
        console.log(reason);
    });
});
