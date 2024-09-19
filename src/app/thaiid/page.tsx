export default function Home() {

  return (
    <div className="bg-white h-screen w-full p-10">

      <div className="bg-blue-400 p-4 mt-48 m-20 rounded-2xl">
        <div className="flex">
          บัตรประชาชน <p className="text-blue-700">Thai National ID Card</p>
        </div>
        <div className="grid grid-cols-2">
          <div>
            <p>เลขบัตรประชาชน</p>
            <p>Identification Number</p>
          </div>
          <div className="text-2xl">
            11000000000
          </div>


        </div>
        <div className="flex"><p>ชื่อตัวและสกุล</p><p className="ml-4">นาย สยาม เกรียงไกล</p></div>
        <div className="flex"><p>Name</p><p className="ml-4">นาย สยาม เกรียงไกล</p></div>
        <div className="flex"><p>Last name</p><p className="ml-4">นาย สยาม เกรียงไกล</p></div>
        <div className="flex"><p>เกิดวันที่</p><p className="ml-4">นาย สยาม เกรียงไกล</p></div>
        <div className="flex"><p>Date of Birth</p><p className="ml-4">นาย สยาม เกรียงไกล</p></div>
        <div className="flex"><p>ที่อยู่</p><p className="ml-4">นาย สยาม เกรียงไกล</p></div>
        <div className="flex"><p>Date of Birth</p></div>


      </div>

    </div>

  )
}