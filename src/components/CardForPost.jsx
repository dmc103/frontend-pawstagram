import Card  from "./Card"
import UserAvatar from "./UserAvatar"


function CardForPost() {

    const handleIconClick = () => {
        alert("Icon clicked")
    }
   
  return (

   <Card>
   <div className="flex gap-2">

    <UserAvatar />

   
    <textarea className="w-full grow p-3 h-15 border-2 border-gray-300 rounded-md mb-2" placeholder="What's on your mind?"></textarea>

   </div>
   <div className="flex gap-7 items-center mt-2">

   <div>
   <button
        onClick={handleIconClick}
        aria-label="tag friends"
        title="Tag friends"
        className="tagButton flex gap-1"
        style={{ color: '#808080', fontSize: '15px'}}>

        <svg xmlns="http://www.w3.org/2000/svg" width="515" height="515" viewBox="0 0 515 515" fill="#808080" className="icon w-6 h-6"><path d="M443.827 195.5c-4.383-11.73-11.753-20.212-21.317-24.524-4.389-1.975-8.995-2.976-13.688-2.976-20.025 0-40.372 18.667-50.632 46.454-12.698 34.42-5.315 68.135 17.173 78.423 4.522 2.071 9.365 3.123 14.394 3.123 20.396 0 41.126-17.119 51.581-42.596 7.9-19.283 8.83-40.927 2.489-57.904zM153.811 214.454C143.551 186.667 123.204 168 103.179 168c-4.693 0-9.3 1.001-13.689 2.976-9.565 4.312-16.934 12.794-21.317 24.524-6.341 16.977-5.411 38.621 2.49 57.904C81.118 278.881 101.848 296 122.244 296c5.028 0 9.871-1.052 14.394-3.123 22.488-10.288 29.871-44.003 17.173-78.423zM198.347 210.601c1.855.081 3.727.03 5.563-.151 10.787-1.059 20.54-6.594 28.207-16.008 12.371-15.191 15.806-38.974 13.201-63.439C241.336 93.3 221.469 65.161 194.776 64c0 0-3.811.008-5.75.193-11.776 1.164-22.481 7.283-30.957 17.695-12.291 15.101-18.198 37.57-15.803 60.104 3.936 37.277 28.57 67.412 56.081 68.609zM256 240c-64 0-128 76.074-128 149.128 0 21.798 10.932 39.331 21.667 46.517C162.925 444.516 172.269 448 191.704 448c23.093 0 29.325-8.078 40.136-15.205 7.819-5.152 14.572-9.605 24.161-9.605s16.342 4.453 24.16 9.605C290.972 439.922 297.203 448 320.297 448c19.434 0 28.778-3.484 42.036-12.355C373.068 428.459 384 410.926 384 389.128 384 316.074 320 240 256 240zM308.281 210.265c1.836.182 3.709.232 5.563.151 27.511-1.196 52.146-31.332 56.081-68.607 2.395-22.534-3.514-45.004-15.804-60.104-8.476-10.412-18.783-16.228-30.56-17.392-1.939-.186-6.146-.312-6.146-.312-26.693 1.161-46.561 29.115-50.542 66.817-2.604 24.466.83 48.248 13.2 63.439 7.668 9.414 17.421 14.949 28.208 16.008z" />
        </svg>Tag Paw-friends</button>
   </div>

   <div>
   <button
        onClick={handleIconClick}
        aria-label="check-in"
        title="check-in"
        className="checkinButton flex gap-1"
        style={{ color: '#808080', fontSize: '15px'}}>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className=" icon w-6 h-6">
        <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
        </svg>Check-in</button>
   </div>

   <div>
   <button
        onClick={handleIconClick}
        aria-label="mood"
        title="mood"
        className="moodButton flex gap-1"
        style={{ color: '#808080', fontSize: '15px'}}>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="icon w-6 h-6">
        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 0 0-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634Zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 0 1-.189-.866c0-.298.059-.605.189-.866Zm2.023 6.828a.75.75 0 1 0-1.06-1.06 3.75 3.75 0 0 1-5.304 0 .75.75 0 0 0-1.06 1.06 5.25 5.25 0 0 0 7.424 0Z" clipRule="evenodd" />
        </svg>Feeling</button>
   </div>

   <div className="flex justify-end grow">
    <button type="submit"
            className="w-1/2 flex justify-center py-1 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-900 focus:outline-none">Post</button>
   </div>

   

   </div>
   </Card>
  )
}

export default CardForPost