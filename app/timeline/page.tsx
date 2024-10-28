import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TimelinePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-4 py-8 md:py-16">
        <header className="mb-8">
          <Link href="/" passHref>
            <Button variant="ghost" className="mb-4">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Button>
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Timeline saya </h1>
        </header>

        <main>
          <section className="space-y-8">
            <div className="border-l-2 border-primary pl-4 pb-1">
              <h2 className="text-xl font-semibold mb-2">September 2024</h2>
              <ul className="list-disc list-inside space-y-2">
                <li className="text-primary">
                  Mencari pekerjaan{" "}
                  <Link
                    href=""
                    className="link-blue"
                  >
                    2024 dari guru sampai pabrik
                  </Link>{" "}
                 mencari pekerjaan yang apa ada nya.
                </li>
              </ul>
            </div>

            <div className="border-l-2 border-primary pl-4 pb-1">
              <h2 className="text-xl font-semibold mb-2">August 2024</h2>
              <ul className="list-disc list-inside space-y-2">
                <li className="text-primary">
                  Menyelesaikan skripsi dan melakukan sidang skripsi{" "}
                  <a
                    href=""
                    className="text-grey-500 italic hover:underline"
                  >
                    dengan tepat waktu 
                  </a>{" "}
                  dari bikin skematik, codingan sampai alat dan lain-lain [
                  <Link
                    href=""
                    className="link-blue"
                  >
                    Code
                  </Link>
                  ].
                </li>
                <li className="text-primary">
                  Perbaikan materi skripsi{" "}
                  <a
                    href=""
                    className="text-grey-500 italic hover:underline"
                  >
                    dan melakukan tanda tangan dosen pembimbing
                  </a>{" "}
                  bikin hardcover, tanda tangan bagian skripsi [
                  <Link
                    href=""
                    className="link-blue"
                  >
                    Code
                  </Link>
                  ].
                </li>
              </ul>
            </div>

            <div className="border-l-2 border-primary pl-4 pb-1">
              <h2 className="text-xl font-semibold mb-2">2024</h2>
              <ul className="list-disc list-inside space-y-2">
                <li className="text-primary">
                Coming Soon [
                  <Link
                    href=""
                    className="link-blue"
                  >
                    Demo
                  </Link>
                  ,
                  <Link
                    href=""
                    className="link-blue"
                  >
                    Code
                  </Link>
                  ].
                </li>
              </ul>
            </div>

            <div className="border-l-2 border-primary pl-4 pb-1">
              <h2 className="text-xl font-semibold mb-2">2024</h2>
              <ul className="list-disc list-inside space-y-2">
                <li className="text-primary">
                  Coming Soon [
                  <Link
                    href=""
                    className="link-blue"
                  >
                    Code
                  </Link>
                  ].
                </li>
                <li className="text-primary">
                 Coming Soon {" "}
                  <a
                    href=""
                    className="link-blue"
                  >
                  Coming Soon
                  </a>
                  .
                </li>
                <li className="text-primary">
                  certifications:
                  <ul className="list-disc list-inside space-y-1 mt-1 pl-5">
                    <li>
                      <Link
                        href=""
                        className="text-grey-500 italic hover:underline"
                      >
                       Coming Soon 
                      </Link>
                    </li>
                    <li>
                      <Link
                        href=""
                        className="text-grey-500 italic hover:underline"
                      >
                        Coming Soon
                      </Link>
                    </li>
                    <li>
                      <Link
                        href=""
                        className="text-grey-500 italic hover:underline"
                      >
                        Coming Soon
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="text-primary">
                   [
                  <a
                    href=""
                    className="link-blue"
                  >
                   Coming Soon
                  </a>
                  ].
                </li>
              </ul>
            </div>

            <div className="border-l-2 border-primary pl-4 pb-1">
              <h2 className="text-xl font-semibold mb-2">2023-2024</h2>
              <ul className="list-disc list-inside space-y-2">
                <li className="text-primary">
                  Lulus kuliah di universitas gunadarma 2023 di bulan agustus
                </li>
                <li>
                  Wis-udah di universitas gunadarma 2023
                  {" "}
                  <a
                    href=""
                    className="text-grey-500 italic hover:underline"
                  >
                    lulus predikat cumlaude IPK 3.54/4.00
                  </a>{" "}, tepat waktu dan mengerjakan skripsi murni dengan bantuan diri sendiri dan allah [
                  <Link
                    href=""
                    className="link-blue"
                  >
                    Code
                  </Link>
                  ].
                </li>
                <li className="text-primary">
                  Mencoba melakukan kursus mandiri selain dikampus{" "}
                  <a
                    className="link"
                    href=""
                  >
                    gratis dan website sertifikat resmi
                  </a>{" "}
                  dari januari 2024.
                </li>
                <li className="text-primary">
                  Mencari pengalaman komunitas di luar kampus dari pendidikan sampai kebersihan[
                  <Link
                    href=""
                    className="link-blue"
                  >
                    Code
                  </Link>
                  ].
                </li>
                <li className="text-primary">
                  Melakukan kursus di universitas gunadarma sebagai syarat sidang sarjana.
                </li>
                <li>
                  dari semester 1 sampai 8{" "}
                  <a
                    href=""
                    className="link-blue"
                  >
                    sertifikat gunadarma
                  </a>{" "}
                  dari minicomputer, microcontroller sampai tentang jaringan komputer{" "}
                  <a
                    href=""
                    className="text-grey-500 italic hover:underline"
                  >
                    dari
                  </a>
                  , dasar, menengah sampai kesulitan melalui ujian sertifikat profesi bnsp.
                </li>
              </ul>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
