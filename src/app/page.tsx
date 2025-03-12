import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { EyeClosed,HairDryer, Hand, Palette, Seat, Towel } from "@phosphor-icons/react/dist/ssr";
import {
  Banknote,
  Briefcase,
  Calendar,
  Search,
  UserPlus,
  Smile,
  Users,
  Zap,
  ShieldCheck,
  Coins,
  AlignJustify,
} from "lucide-react";
import Link from "next/link";

const providerSteps = [
  {
    name: "Sign Up",
    description: "Create your provider profile",
    icon: UserPlus,
  },
  {
    name: "List Services",
    description: "Add your services and availability",
    icon: Briefcase,
  },
  {
    name: "Earn",
    description: "Start receiving bookings and payments",
    icon: Banknote,
  },
];

const clientSteps = [
  {
    name: "Browse",
    description: "Explore a wide range of beauty services",
    icon: Search,
  },
  {
    name: "Book",
    description: "Choose your preferred time and provider",
    icon: Calendar,
  },
  { name: "Enjoy", description: "Receive your pampering session", icon: Smile },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="flex p-4 justify-between items-center">
        <h1 className="text-4xl font-extrabold">PrettiFi</h1>

        <div className="space-x-4 md:block hidden">
          <Button>Find Services</Button>
          <Button>Offer Services</Button>
        </div>

        <AlignJustify className="md:hidden"/>
      </header>

      {/* Body */}
      <main className="flex-1">
        {/* Hero section */}
        <section className="p-8 md:p-28 bg-purple-50">
          <div className="container">
            <div className="flex items-center text-start flex-col space-y-4">
            <h1 className="text-5xl md:text-6xl font-extrabold">Your Beauty, Your Way</h1>
              <p className="font-light text-base">
                Discover and book the best beauty services in your area. Hair,
                lashes, and more at your fingertips.
              </p>

              <div className="flex w-full max-w-md items-center space-x-2">
                <Input className="bg-white" type="search" placeholder="Search for a service" />
                <Button type="submit">
                  <Search />
                  Search
                </Button>
              </div>
            </div>
          </div>
        </section>
        {/* Feature services */}
        <section className="p-8 md:p-16">
          <div className="container">
            <h2 className="text-4xl font-bold text-center mb-8">
              Feature Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                {name:"Hair Styling",icon:<HairDryer className="w-10 h-10"/>},
                {name:"Eyelash Extensions",icon:<EyeClosed className="w-10 h-10"/>},
               { name:"Makeup",icon:<Palette className="w-10 h-10"/>},
                {name:"Nail Care",icon:<Hand className="w-10 h-10"/>},
                {name:"Skincare",icon:<Towel className="w-10 h-10"/>},
                {name:"Massage",icon:<Seat className="w-10 h-10"/>},
              ].map((service) => (
                <div
                  key={service.name}
                  className="flex flex-col items-center p-4 bg-purple-50 rounded-lg"
                >
                  <div className="h-20 w-20 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                   {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-center">{service.name}</h3>
                  <p className="text-center text-gray-500">
                    Professional {service.name.toLowerCase()} services
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-purple-50 py-10 md:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl sm:text-4xl font-bold text-center mb-6 md:mb-12">
              How It Works
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-center mb-6">
                  For Service Providers
                </h3>
                <div className="space-y-8">
                  {providerSteps.map((step) => (
                    <div key={step.name} className="flex items-center">
                      <div className="bg-primary rounded-full p-3 mr-4">
                        <step.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">{step.name}</h4>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-center mb-6">
                  For Clients
                </h3>
                <div className="space-y-8">
                  {clientSteps.map((step) => (
                    <div key={step.name} className="flex items-center">
                      <div className="bg-primary rounded-full p-3 mr-4">
                        <step.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">{step.name}</h4>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        {/* <section className="p-16 bg-purple-50">
          <div className="container">
            <div>
              <h2 className="text-4xl font-bold text-center">How it works</h2>

              <div className="mt-8">
                <h3 className="text-3xl font-bold text-center mb-5">
                  For customers
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="flex flex-col items-center text-center">
                    <Search className="h-12 w-12 text-purple-600 mb-4" />
                    <h3 className="text-xl font-bold mb-2">Search</h3>
                    <p className="text-gray-500">
                      Find the perfect service and professional for your needs
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <Calendar className="h-12 w-12 text-purple-600 mb-4" />
                    <h3 className="text-xl font-bold mb-2">Book</h3>
                    <p className="text-gray-500">
                      Choose a convenient time and book with ease
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <Star className="h-12 w-12 text-purple-600 mb-4" />
                    <h3 className="text-xl font-bold mb-2">Enjoy</h3>
                    <p className="text-gray-500">
                      Experience great service and leave a review
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-3xl font-bold text-center mb-6">
                  For Service Providers
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="flex flex-col items-center text-center">
                    <UserPlus className="h-12 w-12 text-purple-600 mb-4" />
                    <h3 className="text-xl font-bold mb-2">Sign Up</h3>
                    <p className="text-gray-500">
                      Create your professional profile
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <Briefcase className="h-12 w-12 text-purple-600 mb-4" />
                    <h3 className="text-xl font-bold mb-2">Offer Services</h3>
                    <p className="text-gray-500">
                      List your skills and availability
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <Banknote className="h-12 w-12 text-purple-600 mb-4" />
                    <h3 className="text-xl font-bold mb-2">Earn</h3>
                    <p className="text-gray-500">
                      Provide services and grow your business
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Why chose us */}
        <section className="p-8 md:p-16">
          <div className="container mx-auto">
            <h2 className="text-4xl text-center font-extrabold mb-8">
              Why Choose Our Marketplace
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="flex flex-col justify-center items-center bg-purple-50 w-full p-8 rounded-lg">
                <Users className="h-10 w-10" />
                <h3 className="text-xl text-center font-bold">Wide Network</h3>

                <p>
                  Connect with a diverse range of beauty professionals and
                  clients
                </p>
              </div>
              <div className="flex flex-col justify-center items-center bg-purple-50 w-100 p-8 rounded-lg">
                <Zap className="h-10 w-10" />
                <h3 className="text-xl text-center font-bold">Convenience</h3>

                <p>Book or offer services anytime, anywhere</p>
              </div>
              <div className="flex flex-col justify-center items-center bg-purple-50 w-100 p-8 rounded-lg">
                <ShieldCheck className="h-10 w-10" />
                <h3 className="text-xl text-center font-bold">
                  Secure Platform
                </h3>

                <p>Safe transactions and verified profiles</p>
              </div>
              <div className="flex flex-col justify-center items-center bg-purple-50 w-100 p-8 rounded-lg">
                <Coins className="h-10 w-10" />
                <h3 className="text-xl text-center font-bold">
                  Competitive Pricing
                </h3>

                <p>Find great deals or set your own rates</p>
              </div>
            </div>
          </div>
        </section>

        {/* What our customers say  - dont have customers yet no need to add this*/}
        {/* <section className="py-20 bg-purple-50">
          <div className="container mx-auto">
            <h1 className="text-5xl text-center font-bold">What Our Customers Say</h1>
            <div className="flex flex-row mt-8">
              <div>
                <Star/>
                <p>

                </p>
                <span>

                </span>

                
              </div>
              <div>

              </div>
              <div>

              </div>
              <div>

              </div>

            </div>
          </div>
        </section> */}

        <section className="p-8 md:p-24 bg-purple-50">
          <div className="container">
            <div className="flex flex-col justify-center items-center space-y-3">
              <h1 className="text-4xl md:text-6xl font-extrabold">
                Are You a Beauty Professional?
              </h1>
              <p className="font-light text-base">
                Join our platform to reach more clients and grow your business.
              </p>
              <Button className="md:w-1/4 md:h-12 text-lg">
                <Users />
                Join as a Pro
              </Button>
            </div>
          </div>
        </section>

        <footer className="py-10 px-5">
          <div className="container">
            <div className="flex flex-row justify-between font-light text-sm">
              <div>
                <span>© 2024 BeautyHub. All rights reserved.</span>
              </div>

              <div className="space-x-3">
                <Link href="#">Terms of Service</Link>
                <Link href="#">Privacy</Link>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
