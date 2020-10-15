import React, {Suspense, lazy, useRef, useState} from 'react'
const Comments = lazy(()=>import("./Comments"))

function App() {
  const titleRef = useRef()
  const fullNameRef = useRef()
  const contentRef = useRef()
  const submitRef = useRef();

  const [title,setTitle] = useState('');
  const [fullName,setFullName] = useState('');
  const [content,setContent] = useState('');
  const [comments, setComments] = useState([])

  // useEffect(()=>{
  //   titleRef.current.focus();
  // },[])

  const onFirstNameChange=(e,field)=>{
    if(e.keyCode === 13){
      switch(field){
      case 'fullName':
      titleRef.current.focus();
      break;
      case 'title':
      contentRef.current.focus();
      break;
      case 'content':
      submitRef.current.focus();
      break;
      
      }
    }
  }

  const arr = [];

  const handleClick =() =>{
    setComments(list=> { 
      return [{title :title,fullName:fullName,content:content},...list]
    })
    setFullName('')
    setTitle('')
    setContent('');
  }
   return (
     <>
     <h1>Welcome to my blog</h1>
     <h3>Lets talk about life</h3>
     <p>edmwedmkwendmewjndjw cenckjn cneoicnew woiew ecmweod ewdmewod ewdnkn</p>
    <div>
      <input onKeyUp={(e) => onFirstNameChange(e,'fullName')} ref={fullNameRef} onChange={(e)=>setFullName(e.target.value)} placeholder='full name' />
      <input onKeyUp={(e) => onFirstNameChange(e,'title')} ref={titleRef} onChange={(e)=>setTitle(e.target.value)} placeholder='title' />
      <textarea onKeyUp={(e) => onFirstNameChange(e,'content')} ref={contentRef} onChange={(e)=>setContent(e.target.value)} placeholder='Write your comment here' />
      <button onClick={handleClick} ref={submitRef}>Submit</button>
    </div>
    <Suspense fallback={<h1>loading...</h1>}>
        <Comments comments={comments}/>
        </Suspense>
      
    </>
  )
}

export default App
