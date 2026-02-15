import Image from "next/image";
import Link from "next/link";
import { BsAmazon } from "react-icons/bs";
import { FaBookOpen, FaPenFancy } from "react-icons/fa6";

export const metadata = {
  title: "Publications - Rahul Anandeshi",
  description:
    "Published books and stories by Rahul Anandeshi. Explore writings on decision-making, critical thinking, and more.",
};

export default function PublicationsPage() {
  return (
    <div className="py-8 lg:py-16">
      {/* Page Header */}
      <div className="relative mb-16">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-[#1a1443] absolute left-0 w-fit text-white px-5 py-3 text-xl rounded-md">
            PUBLICATIONS
          </span>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {/* Books Section */}
      <div className="mb-24">
        <div className="flex items-center gap-3 mb-10">
          <FaBookOpen className="text-[#16f2b3] text-2xl" />
          <h2 className="text-2xl font-bold text-white">Books</h2>
        </div>

        {/* Book Card */}
        <div className="relative rounded-lg border border-[#1b2c68a0] bg-gradient-to-r from-[#0d1224] to-[#0a0d37] overflow-hidden">
          {/* Top gradient line */}
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
          </div>

          <div className="p-6 lg:p-10">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              {/* Book Covers */}
              <div className="flex flex-row gap-4 justify-center lg:justify-start shrink-0">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-violet-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                  <Image
                    src="/image/books/wise_words_front.png"
                    alt="WISE WORDS - Front Cover"
                    width={220}
                    height={330}
                    className="relative rounded-lg shadow-2xl transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="relative group hidden sm:block">
                  <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-pink-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                  <Image
                    src="/image/books/wise_words_back.png"
                    alt="WISE WORDS - Back Cover"
                    width={220}
                    height={330}
                    className="relative rounded-lg shadow-2xl transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>

              {/* Book Details */}
              <div className="flex flex-col justify-center">
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
                  WISE WORDS
                </h3>
                <p className="text-[#16f2b3] text-sm lg:text-base font-medium mb-6">
                  The Fundamental Guide for Effective Decision Making
                </p>

                <p className="text-gray-300 text-sm lg:text-base leading-relaxed mb-8">
                  In this book, Rahul delves into the common cognitive errors
                  that we often fall prey to and provides strategies for
                  avoiding them. He also emphasizes the importance of honing
                  critical thinking, logic, and problem-solving skills in our
                  daily lives as it is crucial for making sound decisions.
                  Simple, clear, and always surprising, this book is guaranteed
                  to change the way you think and improve your decision-making
                  and communication skills.
                </p>

                <div>
                  <Link
                    href="https://www.amazon.com/WISE-WORDS-Fundamental-Effective-Decision/dp/B0BZFPFW4B/ref=sr_1_1?crid=6BEB4C4558WU&dib=eyJ2IjoiMSJ9.kc55soidaM5g5MZrz2c-7A.7EohIz3sLE9E9EwV0Ek7xUBFTV-lAv7m2smR5YfizIo&dib_tag=se&keywords=wise+words+by+rahul+anandeshi&qid=1771134252&sprefix=wize+words+by+rahul+anandeshi%2Caps%2C174&sr=8-1"
                    target="_blank"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-violet-600 px-6 py-3 rounded-full text-white text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:from-violet-600 hover:to-pink-500 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/25"
                  >
                    <BsAmazon size={18} />
                    <span>Buy on Amazon</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stories Section */}
      <div>
        <div className="flex items-center gap-3 mb-10">
          <FaPenFancy className="text-[#16f2b3] text-2xl" />
          <h2 className="text-2xl font-bold text-white">Stories</h2>
        </div>

        <div className="relative rounded-lg border border-[#1b2c68a0] bg-gradient-to-r from-[#0d1224] to-[#0a0d37] overflow-hidden">
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
          </div>

          <div className="p-10 lg:p-16 flex flex-col items-center justify-center text-center">
            <FaPenFancy className="text-[#16f2b3] text-4xl mb-4 opacity-50" />
            <p className="text-gray-400 text-lg">
              Stories coming soon...
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Stay tuned for new writings and narratives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
