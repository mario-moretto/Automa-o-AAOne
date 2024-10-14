!macro customHeader
Section
  SetOutPath "$INSTDIR"
SectionEnd
!macroend

!macro preInstall
  MessageBox MB_OK "Instalando o Configurador AA One"
!macroend

!macro postInstall
  MessageBox MB_OK "Instalação completa!"
!macroend
