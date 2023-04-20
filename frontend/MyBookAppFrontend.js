
    const form = document.getElementById("book-form");
    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const title = document.getElementById("title").value;
        const ISBN = document.getElementById("isbn").value;
        const author = document.getElementById("author").value;

        let data = await axios.post("http://localhost:5000/postuserdata", {
            title,
            ISBN,
            author
        });
        loadData();
    }) 

    const loadData = async () => {
        let data = await axios.get("http://localhost:5000/getuserdata");
        let bookdata = data.data.data;
        for(let i=0; i<bookdata.length; i++) {
            const list = document.querySelector('#book-list');
  
            const row = document.createElement('tr');
        
            row.innerHTML = `
              <td>${bookdata[i].title}</td>
              <td>${bookdata[i].author}</td>
              <td>${bookdata[i].ISBN}</td>
              <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
            `;
        
            list.appendChild(row);
        }
    }
    document.addEventListener('DOMContentLoaded', loadData);