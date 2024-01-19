"use client";

import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import style_0 from '@/app/page.module.css'
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Latest Causes", href: "/LC" },
  { name: "Soacial Events", href: "/SE" },
  { name: "Contact", href: "/contact" },
]

export default function navLink() {
  const [isModal, setIsModal] = useState(false);
  const rout = useRouter()

  return (
    <nav className={`${isModal ? `${style_0.active}` : ''} ${style_0.nav}`}>
      <div>
        <span>
          <h1>SAS</h1>
          <li className={style_0.menu_btn}>
            <button onClick={() => setIsModal(!isModal)}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </li>
        </span>
        <ul className={`${isModal ? `${style_0.active}` : ''} ${style_0.nav_btns}`}>
          {navLinks.map((Links) => {
            const pathname = usePathname()
            const isActive = pathname === Links.href
            return (
              <li key={Links.name}>
                <Link href={Links.href} className={isActive ? "active" : "deactive"} onClick={() => setIsModal(false)}>
                  {Links.name}
                </Link>
              </li>
            )
          })}
          <li><Link href="/donate">Donate</Link></li>
        </ul>
      </div>
    </nav>
  )
}
