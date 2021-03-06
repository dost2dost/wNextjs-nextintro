import Link from 'next/link';
const Navebar = () =>(
    <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
    <div className="container">
      <a className="navbar-brand" href="#">BitzPrice</a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link href="/"><a className="nav-link">Home</a></Link>
          </li>
          <li className="nav-item">
            <Link href="/about"><a className="nav-link">About</a></Link>
          </li>
          <li className="nav-item">
            <Link href="/login"><a className="nav-link">Login</a></Link>
          </li>
          <li className="nav-item">
            <Link href="/logout"><a className="nav-link">Log Out</a></Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);
export default Navebar;