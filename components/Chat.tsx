'use client'

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card"

import { useChat } from 'ai/react'

export function Chat() {
    const { messages, input, handleInputChange, handleSubmit } = useChat({
        api: '/api/chat'
      })

    return (
        <Card className="w-[600px] h-[700px] shadow-md grid grid-rows-[min-content_1fr_min-content]">
        <CardHeader>
          <CardTitle>Chat IA</CardTitle>
          <CardDescription>
            Using Vercel SDK to create a chatbot.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
            {messages.map(message => {
                return (
                <div key={message.id} className="flex gap-3 text-slate-600 text-sm">
                {message.role === 'user' && (
                    <Avatar>
                    <AvatarFallback>HP</AvatarFallback>
                    <AvatarImage src="https://github.com/hellenapaiva.png"/>
                  </Avatar>
                )}
                 {message.role === 'assistant' && (
                    <Avatar>
                    <AvatarFallback>AI</AvatarFallback>
                    <AvatarImage src="https://github.com/rocketseat.png"/>
                  </Avatar>
                )}
                <p className="leading-relaxed text-justify">
                  <span className="block font-bold text-slate-700">{message.role === 'user' ? 'Usuário' : 'AI'}:</span>
                  {message.content}
                </p>
              </div>
                )
            })}
          
        </CardContent>
        <CardFooter>
            <form className="flex w-full gap-2" onSubmit={handleSubmit}>
                <Input placeholder="How can I help you?" value={input} onChange={handleInputChange}/>
                <Button type="submit">Send</Button>
            </form>
        </CardFooter>
      </Card>
    )
}