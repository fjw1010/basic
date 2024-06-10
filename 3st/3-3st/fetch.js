fetch("<주소>/students")
	.then((res) => res.json())
	.then((result) => console.log(result))
	.catch((error) => console.error('Error:', error));

async function fetchStudentById() {
    try {
        const res = await fetch('https://2b74-175-208-136-225.ngrok-free.app/students');
        const result = await res.json();
        return result;
    } catch(error) {
        console.error('Error:', error)
    }
}