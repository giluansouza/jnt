import { ShareModal } from "@/components/share-modal";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Button from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="bg-black w-full flex min-h-screen flex-col items-center px-4">
      <div className="relative w-full max-w-sm flex flex-col items-center justify-center mt-12">
        <ShareModal link="https://jnt.com.br" />

        <div className="w-full flex flex-col items-center gap-4 mb-8">
          <Avatar className="w-24 h-24">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>JNT</AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-xl font-bold text-white">JNT Inteligência Gráfica</h1>
            <p className="text-zinc-200">Gráfica e fardamentos</p>
          </div>
        </div>

        <div className="w-full flex flex-col gap-6">
          <Button 
            icon={<FaWhatsapp className="h-6 w-6 mr-4" />}
            title="Gráfica"
            url="https://api.whatsapp.com/send?phone=87988430728"
          />

          <Button 
            icon={<FaWhatsapp className="h-6 w-6 mr-4" />}
            title="Fardamentos"
            url="https://api.whatsapp.com/send?phone=87988430728"
          />

          <Button 
            icon={<FaInstagram className="h-6 w-6 mr-4" />}
            title="@jntinteligencia"
            url="https://www.instagram.com/jntinteligencia/"
          />
        </div>
      </div>
    </main>
  );
}
