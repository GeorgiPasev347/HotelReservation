
function EastRoom(){
const link=document.createElement('a');
link.href='EastRoom.html';
link.textContent='.';
link.target='_blank';
document.getElementById('linkContainer').appendChild(link);
};
function NorthRoom(){
    const link=document.createElement('a');
    link.href='NorthRoom.html';
    link.textContent='.';
    link.target='_blank';
    document.getElementById('llinkContainer').appendChild(link);
    };
    function WestRoom(){
        const link=document.createElement('a');
        link.href='WestRoom.html';
        link.textContent='.';
        link.target='_blank';
        document.getElementById('lllinkContainer').appendChild(link);
        };

        const button=document.getElementById('button');
        function Alert(){
            alert("Succesfully Reserved the room!")
        }