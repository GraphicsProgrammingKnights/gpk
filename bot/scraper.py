from seleniumbase import SB

def getFeaturedShader():
    with SB(browser="chrome", headless=False, uc=True) as sb:
        # first loads the site and solves the cloudflare captcha
        sb.uc_open_with_reconnect(
            "https://www.shadertoy.com/",
            reconnect_time=3
        ) 

        if not sb.is_connected():
            sb.reconnect()

        sb.uc_gui_handle_captcha()
        sb.sleep(10)

        # wait for the page to load
        sb.wait_for_element(".shaderSmall", timeout=30)

        # grabs the first shader on featured shaders and its link
        link_element = sb.find_element(
        '.shaderSmall a[href^="/view/"]'
        )   

        shader_link = link_element.get_attribute("href")
        sb.open(shader_link)

        # fetches shader code

        sb.wait_for_element(".CodeMirror")

        shader_code = sb.execute_script("""
        return document.querySelector(".CodeMirror").CodeMirror.getValue();
    """)

    return shader_link, shader_code
