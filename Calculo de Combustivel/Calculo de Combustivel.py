media = 12

tempo = int(input("Digite o tempo gasto na viagem: "))

velocidade_media = input("digite a velocidade média: ")

distancia = int(tempo * velocidade_media)

ltv = float(int(distancia) / media)

print ("O tempo gasto da viagem foi: ", int(tempo), "H")

print ("A velocidade média foi: ", (velocidade_media), "KM")

print ("A quantidade de litros gasta foi: ", float(ltv), "L")

if (ltv == 600):
    print ("Isso é maior que 600")
elif (ltv == 500):
    print ("O valor é menor que 500")
else:
    print ("Erro!")