import './style.css';

export default function Loading({message='Zəhmət olmasa gözləyin...'}) {
    return <div className='loading-container'>
        <span className="loader"></span>
        <span style={{paddingLeft:"10px"}}>{message}</span>
    </div>
}
