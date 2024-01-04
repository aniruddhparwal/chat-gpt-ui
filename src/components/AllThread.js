import React, { useEffect, useState } from 'react'
const OpenAI = require('openai');

function AllThread() {
  const [assistantKey, setAssistantKey] = useState('');
  const [apiKey, setApiKey] = useState('');

const openai = new OpenAI({ apiKey: apiKey, dangerouslyAllowBrowser: true})

  const fetchAllThread = async () => {
    const messages = await openai.beta.threads.messages.list(
      "thread.id"
    );
  
    const data = messages
    console.log(data)
  
  }

  useEffect(() => {
  if (localStorage.getItem('assistantKey') == null || localStorage.getItem('apiKey') == null) {
    window.location.href = '/'
  }
  const key = localStorage.getItem('assistantKey')
  setAssistantKey(JSON.parse(key))
  console.log("assistant",assistantKey,key)
  }, [])
  return (
    <div>
      <h1>AllThread</h1>
    </div>
  )
}

export default AllThread