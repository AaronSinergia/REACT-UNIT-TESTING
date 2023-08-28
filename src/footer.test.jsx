/**
 * @vitest-environment jsdom
 */

import {describe, test} from "vitest";
import {render, screen, waitFor} from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import Footer, {socialLogos} from './components/Footer'

describe('Footer', () => {
    test('should be render correct elements', () => {
        render(<Footer />)

        expect(screen.getByText('Create with love by mis huevos')).toBeInTheDocument()
    })

    test('should be render logos', () => {
        render(<Footer />)
        waitFor(()=>socialLogos.forEach((logo)=>{
            expect(screen.getAllByAltText(logo.alt)).toBeVisible()
        }))
    })
})