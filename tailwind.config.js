/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
        'cleanerHome': "url('/src/assets/images/cleaner.jfif')",
        'shopkeeperHome': "url('/src/assets/images/shopkeeper.jfif')",
        'cleaningJob': "url('/src/assets/images/cleaningjob.jfif')",
        'cleaningMany': "url('/src/assets/images/cleaningmany.jpg')"
      }
    },
  },
  plugins: [],
}

