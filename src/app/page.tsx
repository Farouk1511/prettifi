import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
} from "lucide-react";

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
        <h1 className="text-3xl font-bold">PrettiFi</h1>

        <div className="space-x-4">
          <Button>Find Services</Button>
          <Button>Offer Services</Button>
        </div>
      </header>

      {/* Body */}
      <main className="flex-1">
        {/* Hero section */}
        <section className="p-28 bg-purple-50">
          <div className="container">
            <div className="flex items-center text-start flex-col space-y-4">
              <h1 className="text-5xl font-extrabold">Your Beauty, Your Way</h1>
              <p className="font-light text-base">
                Discover and book the best beauty services in your area. Hair,
                lashes, and more at your fingertips.
              </p>

              <div className="flex w-full max-w-md items-center space-x-2">
                <Input type="search" placeholder="Search for a service" />
                <Button type="submit">
                  <Search />
                  Search
                </Button>
              </div>
            </div>
          </div>
        </section>
        {/* Feature services */}
        <section className="p-16">
          <div className="container">
            <h2 className="text-4xl font-bold text-center mb-8">
              Feature Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                "Hair Styling",
                "Eyelash Extensions",
                "Makeup",
                "Nail Care",
                "Skincare",
                "Massage",
              ].map((service) => (
                <div
                  key={service}
                  className="flex flex-col items-center p-4 bg-purple-50 rounded-lg"
                >
                  <div className="h-20 w-20 bg-purple-100 rounded-full flex items-center justify-center mb-4"></div>
                  <h3 className="text-xl font-bold mb-2">{service}</h3>
                  <p className="text-center text-gray-500">
                    Professional {service.toLowerCase()} services
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-purple-50 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
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
        <section className="pt-16">
          <div className="container px-8">
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
      </main>
    </div>
  );
}
