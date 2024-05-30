"use client"

import * as React from "react"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { FaRegShareFromSquare, FaSquareFacebook, FaSquareXTwitter } from "react-icons/fa6"
import { MdEmail } from "react-icons/md"
import { ArrowRight } from "lucide-react"

export function ShareModal({ link }: { link: string }) {
  const [shareText, setShareText] = React.useState("Confira aqui meu site!")

  const shareOnTwitter = () => {
    const xUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}%0A${encodeURIComponent(link)}`;
    window.open(xUrl, "_blank");
  }

  const shareOnFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(link)}&quote=${encodeURIComponent(shareText)}`;
    window.open(url, "_blank");
  }

  const shareOnEmail = () => {
    const emailSubject = encodeURIComponent(shareText);
    const emailBody = encodeURIComponent(`Confira o meu site: ${link}`);
    const emailUrl = `mailto:?subject=${emailSubject}&body=${emailBody}`;
    window.open(emailUrl, "_blank");
  }

  function copyToClipboard() {
    navigator.clipboard.writeText(link)

    alert("Link copiado para a ôrea de transferência!")
  }

  return (
    <Drawer>
      <DrawerTrigger asChild className="absolute top-0 right-0">
        <button className="rounded-full bg-slate-950 p-4 text-white">
          <FaRegShareFromSquare className="w-6 h-6" />
        </button>
      </DrawerTrigger>
      <DrawerContent className="bg-zinc-500">
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Compartilhar</DrawerTitle>
            <DrawerDescription>Compartilhe seu link</DrawerDescription>
          </DrawerHeader>
          <div className="flex flex-col gap-4 p-4">
            <button onClick={shareOnFacebook} className="w-full border border-zinc-400 rounded-lg p-4 flex items-center gap-1 justify-between py-1 hover:bg-zinc-100">
              <span className="flex items-center gap-2"><FaSquareFacebook size={24} /> Compartilhar no Facebook</span> <ArrowRight />
            </button>
            <button onClick={shareOnTwitter} className="w-full border border-zinc-400 rounded-lg p-4 flex items-center gap-1 justify-between py-1 hover:bg-zinc-100">
              <span className="flex items-center gap-2"><FaSquareXTwitter size={24} /> Compartilhar no X/Twitter</span> <ArrowRight />
            </button>  
            <button onClick={shareOnEmail} className="w-full border border-zinc-400 rounded-lg p-4 flex items-center gap-1 justify-between py-1 hover:bg-zinc-100">
              <span className="flex items-center gap-2"><MdEmail size={24} /> Compartilhar por E-mail</span> <ArrowRight />
            </button>

            <div className="w-full flex items-center rounded-md border border-zinc-300 mt-2 overflow-clip">
              <input className="flex-1 p-2 outline-none text-zinc-500" type="text" defaultValue={link} />
              <button onClick={copyToClipboard} className="bg-zinc-300 px-4 py-2 rounded-r-md hover:bg-zinc-200">Copiar</button>
            </div>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <button className="w-full border border-zinc-400 bg-transparent px-4 py-2 rounded-lg hover:text-zinc-300">Fechar</button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

// 'use client'

// import {
//   Modal, 
//   ModalContent, 
//   ModalHeader, 
//   ModalBody, 
//   ModalFooter, 
//   Button, 
//   useDisclosure
// } from "@nextui-org/react"
// import { ArrowRight, Share2Icon } from "lucide-react"
// import { useState } from "react"
// import { FaSquareXTwitter, FaSquareFacebook } from "react-icons/fa6"
// import { MdEmail } from "react-icons/md"

// interface ModalLinkProps {
//   link: string
// }

// export function ShareModal({ link }: ModalLinkProps) {
//   const {isOpen, onOpen, onOpenChange} = useDisclosure()
//   const [shareText, setShareText] = useState("Confira aqui meu site!")

//   const shareOnTwitter = () => {
//     const xUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}%0A${encodeURIComponent(link)}`;
//     window.open(xUrl, "_blank");
//   }

//   const shareOnFacebook = () => {
//     const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(link)}&quote=${encodeURIComponent(shareText)}`;
//     window.open(url, "_blank");
//   }

//   const shareOnEmail = () => {
//     const emailSubject = encodeURIComponent(shareText);
//     const emailBody = encodeURIComponent(`Confira o meu site: ${link}`);
//     const emailUrl = `mailto:?subject=${emailSubject}&body=${emailBody}`;
//     window.open(emailUrl, "_blank");
//   }

//   function copyToClipboard() {
//     navigator.clipboard.writeText(link)

//     alert("Link copiado para a ôrea de transferência!")
//   }

//   return (
//     <div className="absolute top-0 right-0">
//       <button className="shadow-md rounded-full p-4" onClick={onOpen}>
//         <Share2Icon />
//       </button>
//       <Modal 
//         backdrop="opaque" 
//         isOpen={isOpen} 
//         onOpenChange={onOpenChange}
//         classNames={{
//           backdrop: "bg-gradient-to-t from-sky-400/60 to-blue-500/20 backdrop-opacity-20"
//         }}
//       >
//         <ModalContent>
//           {(onClose) => (
//             <>
//               <ModalHeader className="flex flex-col gap-1">Compartilhe</ModalHeader>
//               <ModalBody>
//                 <button onClick={shareOnFacebook} className="flex items-center gap-1 justify-between py-1 hover:bg-zinc-100">
//                   <span className="flex items-center gap-2"><FaSquareFacebook size={24} /> Compartilhar no Facebook</span> <ArrowRight />
//                 </button>
//                 <button onClick={shareOnTwitter} className="flex items-center gap-1 justify-between py-1 hover:bg-zinc-100">
//                   <span className="flex items-center gap-2"><FaSquareXTwitter size={24} /> Compartilhar no X/Twitter</span> <ArrowRight />
//                 </button>  
//                 <button onClick={shareOnEmail} className="flex items-center gap-1 justify-between py-1 hover:bg-zinc-100">
//                   <span className="flex items-center gap-2"><MdEmail size={24} /> Compartilhar por E-mail</span> <ArrowRight />
//                 </button>

//                 <div className="w-full flex items-center rounded-md border border-zinc-300 mt-2">
//                   <input className="flex-1 p-2 outline-none text-zinc-500" type="text" defaultValue={link} />
//                   <button onClick={copyToClipboard} className="bg-zinc-300 px-4 py-2 rounded-r-md hover:bg-zinc-200">Copiar</button>
//                 </div>
//               </ModalBody>
//               <ModalFooter>
//                 <Button color="danger" variant="light" onPress={onClose}>
//                   Fechar
//                 </Button>
//               </ModalFooter>
//             </>
//           )}
//         </ModalContent>
//       </Modal>
//     </div>
//   )
// }