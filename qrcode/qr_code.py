# Instalar as seguintes bibliotecas
import qrcode
from PIL import Image

# Link do site
url = "https://www.youtube.com/"

# Configuração do QR Code
qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_H,
    box_size=10,
    border=4
)

qr.add_data(url)
qr.make(fit=True)

# Criar imagem com cores fofas
img = qr.make_image(fill_color="black", back_color="white")

# Salvar a imagem
img.save("qrcode_fofo.png")
