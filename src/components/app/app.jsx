import MessageList from '@components/message-list';

const App = () => {

    const data = [
        {
            name: 'Ivan',
            text: 'Hello everybody',
            id: 'sdf'
        },
        {
            name: 'Petr',
            text: 'Second el',
            id: 'dfgh'
        }
    ];

    return (
        <div className='app'>
            <MessageList messages = {data}/>
        </div>
    )
}

export default App;