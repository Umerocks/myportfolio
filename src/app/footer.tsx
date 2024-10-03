export default function Footer(){
    return(

        <footer className="bg-gray-900 text-white text-center py-6">
        <div className="container mx-auto">
          <p className="mb-2">&copy; {new Date().getFullYear()} Engr. Syed Umer Ali. All rights reserved.</p>
          <p className="text-sm">
            Follow me on:
            <a href="https://www.linkedin.com/in/syed-umer-ali-75058b25/" className="mx-2 hover:text-gray-400" target="_blank" rel="noopener noreferrer">LinkedIn</a> |
            <a href="https://github.com/Umerocks" className="mx-2 hover:text-gray-400" target="_blank" rel="noopener noreferrer">GitHub</a>
          </p>
        </div>
      </footer>
    )
}