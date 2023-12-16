import logo from './d16.jpg';
function Demo()
{
   return(
    <div><img src={logo}></img></div>
   )
}
function Oneexport()
{
    return(
        <div>
            <Demo/>
            <h1>Ara Ara</h1></div>
    )
}
export default Oneexport;